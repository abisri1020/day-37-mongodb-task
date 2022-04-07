-- creating tables-- 

create table `student` (id int auto_increment primary key,name varchar(255),email varchar(255) unique,primary key(id));
create table `task` (id int auto_increment primary key,name varchar(255));
create table `batch` (id int auto_increment primary key,name varchar(255));
create table `mentor` (id int auto_increment,name varchar(255),email varchar(255) unique,primary key(id));
create table `collection` (id int auto_increment primary key, student_id int,mentor_id int,task_id int,batch_id int);

-- inserted data into each table
-- student-10
-- task,mentor,batch-6 each

insert into student (name , email) values ("aaa","aaa@gmail.com");
insert into student (name , email) values ("bbb","bbb@gmail.com");
insert into student (name , email) values ("ccc","ccc@gmail.com");
insert into student (name , email) values ("ddd","ddd@gmail.com");
insert into student (name , email) values ("eee","eee@gmail.com");
insert into student (name , email) values ("fff","fff@gmail.com");
insert into student (name , email) values ("ggg","ggg@gmail.com");
insert into student (name , email) values ("hhh","hhh@gmail.com");
insert into student (name , email) values ("iii","iii@gmail.com");
insert into student (name , email) values ("jjj","jjj@gmail.com");

insert into task (name) values ("task1");
insert into task (name) values ("task2");
insert into task (name) values ("task3");
insert into task (name) values ("task4");
insert into task (name) values ("task5");
insert into task (name) values ("task6");

insert into batch (name) values ("batch1");
insert into batch (name) values ("batch2");
insert into batch (name) values ("batch3");
insert into batch (name) values ("batch4");
insert into batch (name) values ("batch5");
insert into batch (name) values ("batch6");

insert into mentor (name , email) values ("mentor1","mentor1@gmail.com");
insert into mentor (name , email) values ("mentor2","mentor2@gmail.com");
insert into mentor (name , email) values ("mentor3","mentor3@gmail.com");
insert into mentor (name , email) values ("mentor4","mentor4@gmail.com");
insert into mentor (name , email) values ("mentor5","mentor5@gmail.com");
insert into mentor (name , email) values ("mentor6","mentor6@gmail.com");

-- creating foreign keys for collection table

alter table collection add (foreign key(student_id) references student(id));
alter table collection add (foreign key(mentor_id) references mentor(id));
alter table collection add (foreign key(task_id) references task(id));
alter table collection add (foreign key(batch_id) references batch(id));

-- to show all tables

select * from collection;
select * from task;
select * from student;
select * from mentor;
select * from batch;

-- creating collection data with foreign keys

insert into collection (student_id,mentor_id,task_id,batch_id) values (1,2,3,5) ;
insert into collection (student_id,mentor_id,task_id,batch_id) values (2,3,4,2) ;
insert into collection (student_id,mentor_id,task_id,batch_id) values (3,4,5,6) ;
insert into collection (student_id,mentor_id,task_id,batch_id) values (4,5,6,1) ;
insert into collection (student_id,mentor_id,task_id,batch_id) values (5,6,1,2) ;
insert into collection (student_id,mentor_id,task_id,batch_id) values (6,1,2,3) ;



