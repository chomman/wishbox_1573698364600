/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dcb97a2f1ef4518a5382d3c
*
* You will get 10% discount for each one of your friends
* 
*/
package com.wishbox.controller.base;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import java.util.ArrayList;
import org.springframework.security.access.annotation.Secured;
import org.springframework.beans.factory.annotation.Autowired;
import com.wishbox.db.wishbox_db.service.PostService;
import com.wishbox.db.wishbox_db.entity.Post;

//IMPORT RELATIONS
import com.wishbox.db.wishbox_db.entity.User;

public class PostBaseController {
    
    @Autowired
	PostService postService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
		@RequestMapping(value = "/post", method = RequestMethod.POST, headers = "Accept=application/json")
	public Post insert(@RequestBody Post obj) {
		Post result = postService.insert(obj);

	    
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/post/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		postService.delete(id);
	}
	

    //CRUD - FIND BY CreatedBy
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/post/findBycreatedBy/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Post> findBycreatedBy(@PathVariable("key") Long idcreatedBy) {
		List<Post> list = postService.findBycreatedBy(idcreatedBy);
		return list;
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/post/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Post get(@PathVariable Long id) {
		Post obj = postService.get(id);
		
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/post", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Post> getList() {
		return postService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/post/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Post update(@RequestBody Post obj, @PathVariable("id") Long id) {
		Post result = postService.update(obj, id);

	    
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
