package com.demo.service;

import java.util.List;

import com.demo.model.User;

public interface UserService {

	User adduser(User u);

	User validate(String username, String password);

	List<User> getAll();



	

	//boolean update(User u);

//	boolean changePassword(User u);

}
