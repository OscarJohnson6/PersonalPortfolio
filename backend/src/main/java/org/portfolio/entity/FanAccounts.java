package org.portfolio.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import org.hibernate.annotations.GenericGenerator;
import java.util.Date;

/**
 * The type User.
 *
 * @author OscarJohnson6
 */
@Entity(name = "FanAccounts")
@Table(name = "fan_emails")
public class FanAccounts implements Identity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "native")
    @GenericGenerator(name = "native", strategy = "native")
    @Column(name = "id")
    @JsonProperty("id")
    private int id;

    @Column(name = "email")
    @JsonProperty("userEmail")
    private String userEmail;

    @Column(name = "entry_date")
    @JsonProperty("entryDate")
    private Date entryDate;

    public FanAccounts() {
    }

    public FanAccounts(String userEmail) {
        this.userEmail = userEmail;
    }

    public FanAccounts(String userEmail, Date entryDate) {
        this.userEmail = userEmail;
        this.entryDate = entryDate;
    }

    public FanAccounts(int id, String userEmail) {
        this.id = id;
        this.userEmail = userEmail;
    }

    public FanAccounts(int id, String userEmail, Date entryDate) {
        this.id = id;
        this.userEmail = userEmail;
        this.entryDate = entryDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Date getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(Date entryDate) {
        this.entryDate = entryDate;
    }
}