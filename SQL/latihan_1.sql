create database latihan_1;
use latihan_1;
create table buku (
kode_buku char(4) primary key,
judul_buku varchar(20) not null,
pengarang varchar(20) not null,
penerbit varchar(20) not null);

create table pengembalian (
kode_pinjam char(4),
kode_buku varchar(20),
tgl_kembali date not null,
denda numeric(9) not null,
primary key(kode_pinjam),
foreign key(kode_pinjam) references peminjaman(kode_pinjam),
foreign key(kode_buku) references buku(kode_buku));

create table peminjaman (
kode_pinjam char(4) primary key,
NIK char(18),
NIM char(8),
tgl_pinjam date not null,
foreign key(NIK) references karyawan(NIK),
foreign key(NIM) references mahasiswa(NIM));

create table mahasiswa (
NIM char(8) primary key,
nama_mhs varchar(30) not null,
alamat_mhs varchar(30) not null,
nohp_mhs varchar(15) not null);

create table karyawan (
NIK char(18) primary key,
nama_karyawan varchar(30) not null,
alamat_karyawan varchar(30) not null,
nohp_karyawan varchar(15) not null,
Jabatan varchar(25) not null);


