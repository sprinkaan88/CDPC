package za.co.cdpc.persistence;

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
//
		RegularEmployee regEmployee = new RegularEmployee();
		regEmployee.setFirstName("Francois");
		regEmployee.setLastName("Bester");
		regEmployee.setSalary(15000);
		regEmployee.setBonus(10000);
		
		session.persist(regEmployee);// persisting the object

		

		System.out.println("successfully saved");
		}
		finally{
			if(t != null) t.commit();
			if(session != null)session.close();
			System.exit(-1);
		}

	}
}