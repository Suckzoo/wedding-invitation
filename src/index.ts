import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import './js/image.d';
import './js/kakao.d';
import * as thumbnail from './assets/images/thumbnail.jpg';


function initLightGallery() {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
    });
}

function initKakaoSDK() {
    Kakao.init('2fa62d1fda5b89bbb99e8dc88e13c50d');
    console.log(`kakao initialized: ${Kakao.isInitialized()}`);
}

function initKakaoMap() {
    /*
    1. map.kakao.com에서 위치 검색
    2. html로 공유하기 -> 일반 지도 코드에서 script 부분만 가져오기
    */
    new daum.roughmap.Lander({
		"timestamp" : "1646132232017",
		"key" : "29beq",
	}).render();  
}

function registerOnclickListeners() {
    document.getElementById('btnKakaoTalk').addEventListener('click', () => {
        Kakao.Link.sendDefault({
            objectType: 'location',
            address: '서울 구로구 경인로 624 신도림라마다호텔 5층 세인트그레이스홀',
            addressTitle: '신도림라마다호텔',
            content: {
                title: '석주, 유라 결혼식에 초대합니다!',
                description: '5/22(일) AM 11:30분 신도림라마다호텔',
                imageUrl: thumbnail,
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
}

(function() {
    initLightGallery();
    initKakaoSDK();
    initKakaoMap();
    registerOnclickListeners();
})()