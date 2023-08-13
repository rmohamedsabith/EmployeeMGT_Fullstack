package com.example.employee_mgt.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.example.employee_mgt.Entity.employee;

@Repository
@EnableJpaRepositories
public interface employeeRepo extends JpaRepository<employee,Integer> {
}
