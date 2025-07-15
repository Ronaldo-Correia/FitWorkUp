package FitWorkUp.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import FitWorkUp.com.entity.PapelEntity;

import java.util.Optional;

public interface PapelRepository extends JpaRepository<PapelEntity, Long> {

    Optional<PapelEntity> findByPapel(String papel);

}
