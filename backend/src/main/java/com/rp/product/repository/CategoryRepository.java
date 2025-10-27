package com.rp.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.rp.product.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
