package za.co.cdpc.persistence;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity  
@Table(name= "Match")
public class Match extends BaseEntity{

	@Id()
	@GeneratedValue(generator="increment")
	@GenericGenerator(name="increment", strategy = "increment")
	private int id;
	
	private String name;
	private Date date;	
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "Match_Shooter",  joinColumns = { 
			@JoinColumn(name = "Match_Id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "Shooter_Id", 
					nullable = false, updatable = false) })
	private Set<Shooter> shooters = new HashSet<Shooter>(0);
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Set<Shooter> getShooters() {
		return shooters;
	}
	public void setShooters(Set<Shooter> shooters) {
		this.shooters = shooters;
	}
	
	public void addShooter(Shooter shooter){
		this.shooters.add(shooter);
	}
	@Override
	public String toString() {
		return "Match [id=" + id + ", name=" + name + ", date=" + date + "]";
	}
	
	
}
