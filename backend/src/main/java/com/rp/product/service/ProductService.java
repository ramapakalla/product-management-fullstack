package com.rp.product.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rp.product.entity.Category;
import com.rp.product.entity.Product;
import com.rp.product.repository.CategoryRepository;
import com.rp.product.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;

    @Autowired
    private CategoryRepository categoryRepo;

    public List<Product> getAll() {
        return productRepo.findAll();
    }

    public Product getById(Long id) {
        return productRepo.findById(id).orElse(null);
    }

    public Product save(Product product) {
        if (product.getCategory() != null && product.getCategory().getId() != null) {
            Category category = categoryRepo.findById(product.getCategory().getId())
                    .orElseThrow(() -> new RuntimeException("Category not found"));
            product.setCategory(category); // attach category properly
        } else {
            throw new RuntimeException("Category ID must be provided");
        }

        return productRepo.save(product);
    }

    public void delete(Long id) {
        productRepo.deleteById(id);
    }
}
