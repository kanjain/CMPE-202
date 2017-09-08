/**
 * Created by kanika on 9/7/17.
 */
public interface State {
    public void insertCoin(int value);
    public void ejectCoin();
    public void turnCrank();
    public void dispense();
}
