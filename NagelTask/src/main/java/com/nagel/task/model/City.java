package com.nagel.task.model;



import lombok.*;

import javax.persistence.*;
import java.util.Objects;


@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "city")
public class City {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @Column(length = 1000)
    private String photo;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        City city = (City) o;
        return id.equals(city.id) &&
                name.equals(city.name) &&
                photo.equals(city.photo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, photo);
    }
}
