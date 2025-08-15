use sekolah;

delimiter $$
create trigger trig_siswa_after_insert
after insert on siswa
for each row
begin
	insert into log_siswa (aksi,nis,nama_baru,tgl)
    values('Insert',new.nis,new.nama,now());
end $$
delimiter ;
