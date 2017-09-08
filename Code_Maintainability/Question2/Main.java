import GumballMachine;


public class Main {
    
    public static void main(String[] args) {
        
        GumballMachine gumballMachine = new GumballMachine(100, 100, new Integer[] {25});
        
        System.out.println(gumballMachine);
        
        gumballMachine.insertCoin(25);
        gumballMachine.insertCoin(25);
        gumballMachine.turnCrank();
        gumballMachine.insertCoin(25);
        gumballMachine.turnCrank();
        gumballMachine.insertCoin(25);
        gumballMachine.turnCrank();
    }
}
