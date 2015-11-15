package za.co.cdpc.persistence;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="MatchScore")
public class MatchScore extends StageScore {
	
	@OneToMany(targetEntity=StageScore.class, cascade=CascadeType.ALL)
	private Set<StageScore> stageScores = new HashSet<StageScore>(0);

	public Set<StageScore> getStageScores() {
		return stageScores;
	}

	public void setStageScores(Set<StageScore> stageScores) {
		this.stageScores = stageScores;
	}
	
	
	public void addStageScore(StageScore stageScore){
		this.stageScores.add(stageScore);
	}
	

}
