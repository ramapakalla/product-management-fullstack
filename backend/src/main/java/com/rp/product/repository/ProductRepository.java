package com.rp.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rp.product.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> { }
