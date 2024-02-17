package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.demo.model.User;
@Repository
public interface UserDao extends JpaRepository<User,Integer> {
	@Query(value="select * from users where username=:username" ,nativeQuery=true)
	User getByUserName(String username);

	@Query(value="select*from users where username=:username&&password=:password" ,nativeQuery=true)
	User validate(String username, String password);

	

}
