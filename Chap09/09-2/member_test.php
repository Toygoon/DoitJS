<?php
$data = '[{
    "id": 1,
    "name": "Kayne Cawdery",
    "email": "kcawdery0@yahoo.co.jp"
    }, {
    "id": 2,
    "name": "Sissy Ducket",
    "email": "sducket1@sohu.com"
    }, {
    "id": 3,
    "name": "Hagen Caudell",
    "email": "hcaudell2@plala.or.jp"
    }]';
echo $_GET["callback"] . "(" . $data . ")";
?>