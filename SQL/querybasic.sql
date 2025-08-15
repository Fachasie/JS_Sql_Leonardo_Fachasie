-- membuat database pegawai
create database pegawai;
-- menggunakan/memanggil database pegawai
use pegawai;
-- membuat tabel hobi
create table hobi(
id int primary key ,
nama_hobi varchar(50) not null);

create table asn(
nip char(18) primary key,
nama varchar(100),
id_hobi int,
foreign key(id_hobi) references hobi(id));

alter table asn change nama nama_lengkap varchar(100); -- mengubah nama kolom
rename table pns to asn; -- mengubah nama tabel

show databases;
show tables;

drop table pns;
drop database pegawai;

delete from asn;
insert into hobi values
(1,'Memasak'),(2,'Olahraga'),(3,'Menyanyi'),(4,'Membaca');

insert into asn values
('123456789112323418','rose',1),
('133456789112323417','jasmine',2),
('143456789112323417','daisy',3),
('153456789112323418','lavenr',2),
('163456789112323417','orchid',1);

select * from hobi;
select * from asn;

update asn set nama = 'bunga' where nip = '133456789112323417';
select nip,nama from asn where nip in ('133456789112323417','163456789112323417')