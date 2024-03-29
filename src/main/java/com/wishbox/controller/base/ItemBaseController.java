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
import com.wishbox.db.wishbox_db.service.ItemService;
import com.wishbox.db.wishbox_db.entity.Item;

//IMPORT RELATIONS
import com.wishbox.db.wishbox_db.entity.Category;
import com.wishbox.db.wishbox_db.entity.User;
import com.wishbox.db.wishbox_db.entity.Tag;

public class ItemBaseController {
    
    @Autowired
	ItemService itemService;



//CRUD METHODS


    //CRUD - CREATE
    @Secured({ "ROLE_PRIVATE_USER" })
		@RequestMapping(value = "/item", method = RequestMethod.POST, headers = "Accept=application/json")
	public Item insert(@RequestBody Item obj) {
		Item result = itemService.insert(obj);

	    
		//external relation tags
		ArrayList<Long> tags = obj.getTags();
		if (tags != null) {
			ItemService.Item_tagsService.updateRelation(result.get_id(), tags);
		}
		
		
		return result;
	}

	
    //CRUD - REMOVE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/item/{id}", method = RequestMethod.DELETE, headers = "Accept=application/json")
	public void delete(@PathVariable("id") Long id) {
		itemService.delete(id);
	}
	

    //CRUD - FIND BY Category
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/item/findBycategory/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Item> findBycategory(@PathVariable("key") Long idcategory) {
		List<Item> list = itemService.findBycategory(idcategory);
		return list;
	}

    //CRUD - FIND BY CreatedBy
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/item/findBycreatedBy/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Item> findBycreatedBy(@PathVariable("key") Long idcreatedBy) {
		List<Item> list = itemService.findBycreatedBy(idcreatedBy);
		return list;
	}

    //CRUD - FIND BY Tags
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/item/findBytags/{key}", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Item> findBytags(@PathVariable("key") Long idtags) {
		List<Item> list = itemService.findBytags(idtags);
		return list;
	}
	
    //CRUD - GET ONE
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/item/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public Item get(@PathVariable Long id) {
		Item obj = itemService.get(id);
		
		
		//external relation tags
		ArrayList<Long> tags = ItemService.Item_tagsService.findBy_Item(id);
		obj.setTags(tags);
		
		
		return obj;
	}
	
	
    //CRUD - GET LIST
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/item", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<Item> getList() {
		return itemService.getList();
	}
	
	

    //CRUD - EDIT
    @Secured({ "ROLE_PRIVATE_USER" })
	@RequestMapping(value = "/item/{id}", method = RequestMethod.POST, headers = "Accept=application/json")
	public Item update(@RequestBody Item obj, @PathVariable("id") Long id) {
		Item result = itemService.update(obj, id);

	    
		//external relation tags
		ArrayList<Long> tags = obj.getTags();
		if (tags != null) {
			ItemService.Item_tagsService.updateRelation(id, tags);
		}
		
		
		return result;
	}
	


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */


	
}
