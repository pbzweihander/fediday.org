# fediday.org - 연합형 연합우주의 날

이 도움말은 [영어](README.md)로도 읽으실 수 있습니다!

## 무엇을?

연합우주와 관련된 각자의 기념하고 싶은 날을 기념합니다.

## 왜?

한 유저가 '연합우주의 날은 없을까?'라는 글을 올렸습니다 ([링크](https://yuri.garden/notes/a6fudw931d)).
그러고 나서 다른 유저들이 그 날을 연합우주의 날로 기념하기로 정했습니다 ([링크1](https://uri.life/@dazeemdas/114317410597152387), [링크2](https://planet.moe/@robin_maki/114317413994515299)).

## 기여

### 기념일 추가

`src/data/day`에 YAML 파일을 추가하거나, 해당 기념일에 대한 정보를 새 이슈로 올려주세요.

### 번역 추가

모든 로캘은 소문자여야 합니다. [이는 astro의 국제화 방식을 따릅니다]([https://docs.astro.build/en/reference/modules/astro-i18n/#getrelativelocaleurl](https://docs.astro.build/ko/reference/modules/astro-i18n/#getrelativelocaleurl)).

1. `astro.config.mjs`에서 `locales` 필드를 수정하세요
2. `src/types.ts`에서 `multiLanguageObject` zod 객체 정의를 수정하세요 
3. `src/pages/<locale>/index.astro`를 추가하세요
   - `index.astro`에서 `<Days lang="<locale>" />`이 제대로 들어갔는지 꼭 확인해주세요!
4. `src/data/day/README.md`에 지원 언어를 추가해주세요
5. (선택사항) `src/data/day`에서 기념일들의 이름과 소개 번역을 추가해주세요

### 기타

그래픽 디자이너가 필요합니다 제발 도와주세요

### 기타

무엇이든 마음 편히 기여해주세요!
