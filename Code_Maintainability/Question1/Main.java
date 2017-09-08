import GumballMachine;

public class Main {

		public static void main(String[] args) {

			GumballMachine machine1 = new GumballMachine(100, 50, new Integer[] {1,5,10,25,100});
			GumballMachine machine2 = new GumballMachine(100, 25, new Integer[] { 25 });
			GumballMachine machine3 = new GumballMachine(100, 50, new Integer[] { 25 });

			machine1.insertCoin(25);
			machine1.insertCoin(25);
			machine1.turnCrank();

    }
}
