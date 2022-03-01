# Wedding invitation

## how to run
parcel을 이용한다.

```
npm run start
```

## deploy
gh-pages branch를 이용한다는 가정 하에서 `npm run publish`를 하면 된다.
public-url 파라미터가 본인 url로 바뀌어야 한다.
packages.json의 suckzoo.github.io를 적절히 바꿔주자.


## venue 집어넣기
`index.ts` 의 initKakaoMap 참조

## kakao key 집어넣기
.env 에 다음을 넣는다.

```env
KAKAO_KEY=<<your kakao key>>
FIREBASE_API_KEY=<<your firebase key>>
```