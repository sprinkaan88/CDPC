package za.co.cdpc.persistence;

import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class StoreData {
	public static void main(String[] args) {
		Transaction t = null;
		Session session = null;
		try{
		// creating configuration object
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");// populates the data of the
											// configuration file

		// creating seession factory object
		SessionFactory factory = cfg.buildSessionFactory();

		// creating session object
		session = factory.openSession();

		// creating transaction object
		t = session.beginTransaction();

		Shooter shooter = new Shooter();
		shooter.setFirstName("Francois");
		shooter.setLastName("Bester");
		
		Shooter shooter2 = new Shooter();
		shooter2.setFirstName("Adrian");
		shooter2.setLastName("Rosslee");		
				
		Match match = new Match();
		match.setName("CDPC August Clubshoot");
		match.setDate(new Date());
		
		shooter.addMatch(match);
		match.addShooter(shooter);
		match.addShooter(shooter2);
		
		StageScore stageScore1 = new StageScore();
		stageScore1.setShooter(shooter2);
		stageScore1.setFinalScore(30);
		stageScore1.setMatch(match);
		
		StageScore stageScore2 = new StageScore();
		stageScore2.setShooter(shooter2);
		stageScore2.setFinalScore(14);
		stageScore2.setMatch(match);
		
		MatchScore matchScore = new MatchScore();
		matchScore.setFinalScore(31);
		matchScore.setMatch(match);;
		matchScore.addStageScore(stageScore1);
		matchScore.addStageScore(stageScore2);
		matchScore.setShooter(shooter2);
		
		
		session.persist(matchScore);
		session.persist(stageScore1);
		session.persist(stageScore2);
		session.persist(shooter2);
		session.persist(shooter);// persisting the object
		session.persist(match);
		
		Query query=session.createQuery("from Shooter");
		List<Shooter> list = query.list();
		
		for (Iterator<Shooter> iterator = list.iterator(); iterator.hasNext();) {
			Shooter shooter3 = iterator.next();
			System.out.println(shooter3);
		}
		
		System.out.println("successfully saved");
		}catch(Exception e){
			e.printStackTrace();
		}
		finally{
			if(t != null) t.commit();
			if(session != null)session.close();
			System.exit(-1);
		}

	}
}