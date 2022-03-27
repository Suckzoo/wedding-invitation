import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore, limit, orderBy, query, startAfter } from 'firebase/firestore';

import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import './js/image.d';
import './js/kakao.d';
import * as mainImage from './assets/images/6.jpg';


let app = null;
let db = null;
let lastSnapshot = null;

function initLightGallery() {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
    });
}

function initKakaoSDK() {
    Kakao.init(process.env.KAKAO_KEY);
    console.log(`kakao initialized: ${Kakao.isInitialized()}`);
}

function initKakaoMap() {
    /*
    1. map.kakao.com에서 위치 검색
    2. html로 공유하기 -> 일반 지도 코드에서 script 부분만 가져오기
    */
    new daum.roughmap.Lander({
        "timestamp": "1646132232017",
        "key": "29beq",
    }).render();
}

function initFirebase() {
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: "suckzoo-log.firebaseapp.com",
        projectId: "suckzoo-log",
    }
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"'`=\/]/g, s => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    }[s]));
}

function addComment(commentBook, location, comment) {
    let date: string = 'Invalid date';
    if (comment.timestamp instanceof Date) {
        date = new Date(comment.timestamp).toLocaleString('ko-KR');
    } else {
        date = new Date(comment.timestamp.seconds * 1000).toLocaleString('ko-KR');
    }
    commentBook.insertAdjacentHTML(location,
        `<div class="comment-entry">
            <div class="row">
                <span class="name">${escapeHtml(comment.username)}</span>
                <span class="date">${date}</span>
            </div>
            <p class="message">
                ${escapeHtml(comment.comment)}
            </p>
        </div>`
    );
}

async function pullComments() {
    const commentCollection = collection(db, 'visitor-comments');
    let commentQuery;
    if (lastSnapshot) {
        commentQuery = query(
            commentCollection,
            orderBy('timestamp', 'desc'),
            startAfter(lastSnapshot),
            limit(10)
        )
    } else {
        commentQuery = query(
            commentCollection,
            orderBy('timestamp', 'desc'),
            limit(10),
        );
    }
    const commentBook = document.getElementById('comments');
    const snapshots = await getDocs(commentQuery);
    if (snapshots.docs.length) {
        lastSnapshot = snapshots.docs[snapshots.docs.length - 1];
    }
    snapshots
        .docs
        .map(doc => doc.data())
        .forEach(comment => addComment(commentBook, 'beforeend', comment));
}

async function pushComment() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const comment = (document.getElementById('comment') as HTMLInputElement).value;
    if (username.length < 1 || username.length > 10) {
        alert('사용자 이름은 1~10자로 입력해주세요.');
        return;
    }
    username.replace(/\n/g, ' ');
    if (comment.length < 1 || comment.length > 100) {
        alert('댓글은 1~100자로 입력해주세요.');
        return;
    }
    comment.replace(/\n/g, ' ');
    const commentDoc = {
        username,
        comment,
        timestamp: new Date(),
    }
    await addDoc(collection(db, 'visitor-comments'), commentDoc);
    alert('댓글이 작성되었습니다.');
    const commentBook = document.getElementById('comments');
    addComment(commentBook, 'afterbegin', commentDoc);
}

function registerOnclickListeners() {
    document.getElementById('btn-kakao-talk').addEventListener('click', () => {
        Kakao.Link.sendDefault({
            objectType: 'location',
            address: '서울 구로구 경인로 624 신도림라마다호텔 5층 세인트그레이스홀',
            addressTitle: '신도림라마다호텔',
            content: {
                title: '석주, 유라 결혼식에 초대합니다!',
                description: '5/22(일) AM 11:30분 신도림라마다호텔',
                imageUrl: mainImage,
                link: {
                    mobileWebUrl: 'https://suckzoo.github.io/wedding-invitation',
                    webUrl: 'https://suckzoo.github.io/wedding-invitation'
                },
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: {
                        mobileWebUrl: 'https://suckzoo.github.io/wedding-invitation',
                        webUrl: 'https://suckzoo.github.io/wedding-invitation'
                    },
                },
            ],
        })
    });
    document.getElementById('push-comment').addEventListener('click', () => {
        pushComment();
    });
    document.getElementById('pull-comments').addEventListener('click', () => {
        pullComments();
    })
}

function getWeek(targetDate: Date): number {
    const date = new Date(targetDate);
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
        - 3 + (week1.getDay() + 6) % 7) / 7);
}

function initCalendar(targetDate: Date) {
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    const date = targetDate.getDate();
    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0);
    const eomDate = endOfMonth.getDate();

    const contents = document.getElementById('calendar-contents');
    const root = document.createElement('time');
    root.setAttribute('datetime', `${year}-${month + 1}`)
    contents.appendChild(root);

    let row = document.createElement('time');
    let week = getWeek(startOfMonth);
    row.setAttribute('datetime', `${year}-W${week}`);
    root.appendChild(row);
    row.className = 'row';

    for (let i = 0; i < startOfMonth.getDay(); i++) {
        const cell = document.createElement('time');
        cell.innerHTML = '&nbsp;';
        row.appendChild(cell);
    }
    let currDay = startOfMonth.getDay();
    let currDate = 1;
    while (currDate <= eomDate) {
        const cell = document.createElement('time');
        cell.setAttribute('datetime', `${year}-${month + 1}-${currDate}`);
        cell.innerHTML = currDate.toString();
        if (currDate === date) {
            cell.className = 'active';
        }
        row.appendChild(cell);
        currDate++;
        currDay++;
        if (currDate > eomDate) {
            for (let i = 0; i < 7 - currDay; i++) {
                const cell = document.createElement('time');
                cell.innerHTML = '&nbsp;';
                row.appendChild(cell);
            }
        }
        if (currDay === 7 && currDate <= eomDate) {
            week++;
            row = document.createElement('time');
            row.setAttribute('datetime', `${year}-W${week}`);
            root.appendChild(row);
            row.className = 'row';
            currDay = 0;
        }
    }
}

function reveal() {
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = sections[i].getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            sections[i].classList.add("fade-in");
        }
    }
}

function calculateDDay(date: Date) {
    const dday = document.getElementById('dday')
    const timeDiff = date.getTime() - new Date().getTime();
    const d = Math.floor(timeDiff / 864e5) + 1;
    dday.innerHTML = d > 0 ? `D-${d}` : `D+${d}`;
}

async function copyBankAccount(id: string) {
    const accounts = {
        groom: '80170104228385',
        groomMom: '74380101130457',
        bride: '110459794448',
        brideMom: '110459794448'
    }
    await navigator.clipboard.writeText(accounts[id]);
    alert('계좌번호가 복사되었습니다.');
}

(function () {
    reveal();
    window.addEventListener('scroll', reveal);
    (window as any).copyBankAccount = copyBankAccount;
    const targetDate = new Date('2022-05-22T11:30:00+0900');
    calculateDDay(targetDate);
    initCalendar(targetDate);
    initLightGallery();
    initKakaoSDK();
    initKakaoMap();
    initFirebase();
    registerOnclickListeners();
    pullComments();
})()