import java.util.Arrays;
import java.util.HashSet;

/**
 * Created by kanika on 9/7/17.
 */
public class GumballMachine {

    State soldOutState;
    State noCoinState;
    State hasCoinState;
    State soldState;


    State state = soldOutState;
    int count = 0;
    int coinAmount = 0;
    private HashSet<Integer> allowedSet;
    int currentCoinValue = 0;
    int gumBallValue = 0;

    public GumballMachine(int numberGumballs, int unitPrice, Integer[] denominations) {
        soldOutState = new SoldOutState(this);
        noCoinState = new NoCoinState(this);
        hasCoinState = new HasCoinState(this);
        soldState = new SoldState(this);
        this.allowedSet = new HashSet<>(Arrays.asList(denominations));

        this.count = numberGumballs;
        this.gumBallValue = unitPrice;

        if (numberGumballs > 0) {
            state = noCoinState;
        }
    }

    public void insertCoin(int value) {
        currentCoinValue = value;
        coinAmount += value;
        state.insertCoin(value);
    }

    public void ejectCoin() {
        state.ejectCoin();
    }

    public void turnCrank() {
        if (allowedSet.contains(currentCoinValue)) {
            state.turnCrank();

            if (coinAmount == gumBallValue) {
                state = soldState;
                state.dispense();
                coinAmount = 0;
            }


        } else {
            System.out.println("Invalid coin, coin ejected, please insert valid coin.");
            state.ejectCoin();
            state = noCoinState;
        }
    }

    void setState(State state) {
        this.state = state;
    }

    void releaseBall() {
        System.out.println("A gumball comes rolling out the slot...");
        if (count != 0) {
            count = count - 1;
        }
    }

    int getCount() {
        return count;
    }

    void refill(int count) {
        this.count = count;
        state = noCoinState;
    }

    public State getState() {
        return state;
    }

    public State getSoldOutState() {
        return soldOutState;
    }

    public State getNoCoinState() {
        return noCoinState;
    }

    public State getHasCoinState() {
        return hasCoinState;
    }

    public State getSoldState() {
        return soldState;
    }

    public String toString() {
        StringBuffer result = new StringBuffer();
        result.append("\nMighty Gumball, Inc.");
        result.append("\nJava-enabled Standing Gumball Model #2004");
        result.append("\nInventory: " + count + " gumball");
        if (count != 1) {
            result.append("s");
        }
        result.append("\n");
        result.append("Machine is " + state + "\n");
        return result.toString();
    }
}
