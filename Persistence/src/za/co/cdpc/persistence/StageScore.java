package za.co.cdpc.persistence;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="StageScore")
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
public class StageScore extends BaseEntity {
	
	@Id()
	@GeneratedValue(generator="increment")
	@GenericGenerator(name="increment", strategy = "increment")
	private int id;
	
	@OneToOne(targetEntity=Shooter.class)
	private Shooter shooter;
	
	@OneToOne(targetEntity=Match.class)
	private Match match;
	
	private double finalScore;
	private double totalTime;
	private double totalPEs;
	private double totalFTNs;
	private double totalFTDRs;
	private double totalHONTs;
	private double totalPointsDown;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Shooter getShooter() {
		return shooter;
	}
	public void setShooter(Shooter shooter) {
		this.shooter = shooter;
	}
	public double getFinalScore() {
		return finalScore;
	}
	public void setFinalScore(double finalScore) {
		this.finalScore = finalScore;
	}
	public double getTotalTime() {
		return totalTime;
	}
	public void setTotalTime(double totalTime) {
		this.totalTime = totalTime;
	}
	public double getTotalPEs() {
		return totalPEs;
	}
	public void setTotalPEs(double totalPEs) {
		this.totalPEs = totalPEs;
	}
	public double getTotalFTNs() {
		return totalFTNs;
	}
	public void setTotalFTNs(double totalFTNs) {
		this.totalFTNs = totalFTNs;
	}
	public double getTotalFTDRs() {
		return totalFTDRs;
	}
	public void setTotalFTDRs(double totalFTDRs) {
		this.totalFTDRs = totalFTDRs;
	}
	public double getTotalHONTs() {
		return totalHONTs;
	}
	public void setTotalHONTs(double totalHONTs) {
		this.totalHONTs = totalHONTs;
	}
	public double getTotalPointsDown() {
		return totalPointsDown;
	}
	public void setTotalPointsDown(double totalPointsDown) {
		this.totalPointsDown = totalPointsDown;
	}
	public Match getMatch() {
		return match;
	}
	public void setMatch(Match match) {
		this.match = match;
	}
	
	

}
