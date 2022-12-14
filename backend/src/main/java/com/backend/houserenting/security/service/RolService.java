package com.backend.houserenting.security.service;

import com.backend.houserenting.security.entity.Rol;
import com.backend.houserenting.security.enums.RolName;
import com.backend.houserenting.security.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class RolService {

    @Autowired
    RolRepository rolRepository;

    public Optional<Rol> getByRolNombre(RolName rolNombre){
        return rolRepository.findByRolName(rolNombre);
    }

    public void save(Rol rol){
        rolRepository.save(rol);
    }
}
