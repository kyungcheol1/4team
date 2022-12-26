4team 고정사항

변수명 = 카멜표기법 무조건 단어 합쳐진건 대문자

\*\*password = pw 통일

deps 4 ; 붙이기

Front - 2일

메인페이지 회원가입 게시판

Back - 3일(안되면 안됨 해야댐)

user board reply > 스터디

controllers
public js css
repositoty
routers
services
views
server

url 정리부터
/ main >> user login & board list & user profile

/ board / write >> view
/ board / view ? // modify, delete
/ board / modify >> view
/ board / delete >> list
/ board / list >> view

/ user / join >> welcome
/ user / login >> main
/ user / profile >> profile
/ user / welcome >> login
