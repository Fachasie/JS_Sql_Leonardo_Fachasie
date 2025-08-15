create database db_blog_post;
use db_blog_post;

create table users (
id int primary key,
nama varchar(100) not null);

create table categories(
id int primary key,
nama varchar(100) not null);

create table blog_post (
id int primary key,
title varchar(100) not null,
body text,
author_id int,
foreign key(author_id) references users(id));

create table post_categories (
post_id int not null,
category_id int not null,
foreign key(post_id) references blog_post(id),
foreign key(category_id) references categories(id));

insert into users values 
(1,'John Doe'),
(2,'Robert'),
(3,'Frank'),
(4,'Jane');

insert into blog_post values 
(1,'Algorithn','this is article for algorithm',1),
(2,'Lorem Ipsum','lorem ipsum dolor sit amet',1),
(3,'NodeJS','Node.js is a JavaScript runtime built on Chrome`s V8 Javascript engine',2),
(4,'ReactJS','ReactJS is JavaScript library for building user interfaces',4),
(5,'Git','Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency',3),
(6,'Basketball','Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender`s hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court, while preventing the opposing team from shooting through their own hoop',2);


insert into categories values
(1,'Basic'),
(2,'Library'),
(3,'Unknown'),
(4,'Sport');

insert into post_categories values
(1,1),
(2,3),
(3,1),
(3,2),
(4,2),
(4,1),
(5,1),
(6,4);

-- join dari user ke blogpost, dimana select semua bagian dari blog_post, dan users, lalu mencari dimana users.nama ada 'John Doe'nya
select blog_post.id, blog_post.title, blog_post.body, blog_post.author_id, users.id, users.nama
from users
join blog_post on users.id = blog_post.author_id
where users.nama IN('John Doe');
    
-- join 4 table, menggunakan 3 join yang dilakukan secara berurut mengikutin EER diagram agar lebih mudah, dan mencari nama category basic
select categories.nama as Nama_Kategori,blog_post.title as Judul_Post, users.nama as Nama_pengarang
from users
join blog_post on users.id = blog_post.author_id
join post_categories on blog_post.id = post_categories.post_id
join categories on categories.id = post_categories.category_id
where categories.nama in('Basic');


-- join seperti sebelumnya tetapi menggunakan 2 kondisi where menggunakan or, dan diubah yang di tampilkan
select categories.nama as Nama_Kategori,blog_post.title as Judul_Post, blog_post.body as Naskah
from users
join blog_post on users.id = blog_post.author_id
join post_categories on blog_post.id = post_categories.post_id
join categories on categories.id = post_categories.category_id
where users.nama in('robert') or users.nama in('frank');


-- mirip seperti diatas tetapi menggunakan where berbeda lagi menggunakan count dan group by untuk menampilkan duplikat
select users.nama as "Nama Pengarang", categories.nama as "Nama Kategori"
from users
join blog_post on users.id = blog_post.author_id
join post_categories on blog_post.id = post_categories.post_id
join categories on categories.id = post_categories.category_id
where blog_post.id IN (
        select post_id
        from post_categories
        group by post_id
        having count(category_id) >= 2
    );
   
   
select users.nama as "Nama Pengarang", blog_post.title as "Judul Post"
from users
join blog_post on users.id = blog_post.author_id
join post_categories on blog_post.id = post_categories.post_id
join categories on categories.id = post_categories.category_id
where blog_post.id IN (
        select post_id
        from post_categories
        group by post_id
        having count(category_id) = 1
    );






