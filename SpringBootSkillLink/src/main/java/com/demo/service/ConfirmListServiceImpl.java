package com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.ConfirmDao;
import com.demo.model.ConfirmList;


@Service
public class ConfirmListServiceImpl implements ConfirmListService {

	@Autowired
	public ConfirmDao cdao;
	@Override
	public List<ConfirmList> getData(int sid) {
		// TODO Auto-generated method stub
		return cdao.getList(sid);
	}

	@Override
	public void addData(ConfirmList c) {
		// TODO Auto-erated method stub
		cdao.save(c);
	}

}
