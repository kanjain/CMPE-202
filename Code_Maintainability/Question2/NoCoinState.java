/**
 * Created by kanika on 9/7/17.
 */
public class NoCoinState implements State {
    GumballMachine gumballMachine;

    public NoCoinState(GumballMachine gumballMachine) {
        this.gumballMachine = gumballMachine;
    }

    public void insertCoin(int value) {
        System.out.println("You inserted a quarter");
        gumballMachine.setState(gumballMachine.getHasCoinState());
    }

    public void ejectCoin() {
        System.out.println("You haven't inserted a quarter");
    }

    public void turnCrank() {
        System.out.println("You turned, but there's no quarter");
    }

    public void dispense() {
        System.out.println("You need to pay first");
    }

    public String toString() {
        return "waiting for quarter";
    }
}
