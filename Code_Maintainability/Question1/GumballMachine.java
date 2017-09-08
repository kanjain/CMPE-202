import java.util.Arrays;
import java.util.HashSet;

public class GumballMachine{

    private int num_gumballs;
    private int hold_denomination;
    private int price;
    private HashSet<Integer> allowedSet;

    public GumballMachine(int size, int unitPrice, Integer[] denominations) {
        // initialise instance variables
        this.num_gumballs = size;
        this.hold_denomination = 0;
        this.price = unitPrice;
        this.allowedSet = new HashSet<>(Arrays.asList(denominations));
    }

    public void insertCoin(int coin) {
        if (allowedSet.contains(coin)) {
            this.hold_denomination += coin;
        }
    }

    // Turn crank when exact money returns candy.
    public void turnCrank() {

        if (this.hold_denomination == price) {
            if (this.num_gumballs > 0) {
                this.num_gumballs--;
                this.hold_denomination = 0;
                System.out.println("Thanks. Gumball Ejected!");
            } else {
                System.out.println("No More Gumballs!  Sorry, can't return your money.");
            }
        } else {
            System.out.println("Please insert more.");
        }
    }
}