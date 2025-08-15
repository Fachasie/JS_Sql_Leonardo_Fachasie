use pegawai;

-- comit yang tidak bisa rollback
start transaction;
insert into hobi(id,nama_hobi) values
(5,'Main Game');
commit;
rollback;

-- no commit, bisa di rollback
start transaction;
insert into hobi(id,nama_hobi) values
(6,'makan');
rollback;
delete from hobi where id= 5