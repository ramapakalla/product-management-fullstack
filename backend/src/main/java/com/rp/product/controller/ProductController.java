package com.rp.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rp.product.entity.Product;
import com.rp.product.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")


public class ProductController {
	@Autowired
	private ProductService service;

	@GetMapping
	public List<Product> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/{id}")
	public Product getById(@PathVariable Long id) {
		return service.getById(id);
	}
	
	@PostMapping
	public Product add(@RequestBody Product p) {
		return service.save(p);
	}
	
	@PutMapping("/{id}")
	public Product update(@PathVariable Long id,@RequestBody Product p) {
		p.setId(id);
		return service.save(p);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}
	
}
