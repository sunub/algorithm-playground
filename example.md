---
title : Type Interface - 타입 선언문(1)
date : 2023-06-12
tag :	
	- typescript
description : 
	타입스크립트의 타입추론을 적극적으로 이용하자...
category : typescript
slug : /03_ts/typeInterface
template : post
---

### 타입스크립트의 타입추론을 적극적으로 이용하자

위의 예제를 한 번 살펴보자 위의 경우 x는 number라는 타입을 따로 추론하지 않더라도 x는 number 타입이라는 것이 명확하기 때문에 따로 선언하지 않아도 된다.

아래의 문자열의 경우 axis1의 string의 타입은 광범위한 타입이다. 타입을 정함에 있어서 광범위한 타입 보다는 더 좁은 타입을 사용해야 한다. 이러한 의미에서 axis2는 타입이 “y”로 정해져 있다. 이 경우 string보다 더 정확한 값이라고 할 수 있다.
