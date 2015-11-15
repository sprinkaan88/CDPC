package za.co.cdpc.persistence;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity  
@Table(name= "Shooter")
public class Shooter extends BaseEntity {
	
	@Id()
	@GeneratedValue(generator="increment")
	@GenericGenerator(name="increment", strategy = "increment")
	private int id;
	private String firstName, lastName;
	
	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "shooters")
	private Set<Match> matches = new HashSet<Match>(0);

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	
	public Set<Match> getMatches() {
		return matches;
	}

	public void setMatches(Set<Match> matches) {
		this.matches = matches;
	}
	
	public void addMatch(Match match){
		matches.add(match);
	}

	
	

}
