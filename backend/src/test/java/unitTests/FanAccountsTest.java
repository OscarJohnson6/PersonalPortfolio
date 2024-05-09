package unitTests;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.portfolio.database.GenericDao;
import org.portfolio.entity.FanAccounts;
import util.Database;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

/**
 * The type Health numbers test.
 *
 * @author OscarJohnson6
 */
public class FanAccountsTest {
    private GenericDao<FanAccounts> dao;
    private final int TEST_FAN_ID = 1;

    /**
     * Create a new ExerciseNinjas object before each test is run.
     */
    @BeforeEach
    void setUp() {
        Database database = Database.getInstance();
        database.runSQL("cleandb.sql");
        dao = new GenericDao<>(FanAccounts.class);
    }

    /**
     * Test database insert.
     */
    @Test
    void testDatabaseInsert() {
        String newEmail = "oscar@gmail.com";
        FanAccounts fan = new FanAccounts(newEmail);
        int id = dao.insert(fan);
        FanAccounts fanReturn = dao.getById(id);

        assertEquals(id, fanReturn.getId());
        assertEquals(newEmail, fanReturn.getUserEmail());
    }

    /**
     * Test database update.
     */
    @Test
    void testDatabaseUpdate() {
        FanAccounts fan = dao.getById(TEST_FAN_ID);
        String previousEmail = fan.getUserEmail();
        String newEmail = "thisIsNew@gmail.com";

        fan.setUserEmail(newEmail);

        dao.update(fan);
        FanAccounts fanUpdated = dao.getById(TEST_FAN_ID);

        assertNotEquals(previousEmail, fanUpdated.getUserEmail());
        assertEquals(newEmail, fanUpdated.getUserEmail());
    }

    /**
     * Test database delete.
     */
    @Test
    void testDatabaseDelete() {
        FanAccounts fan = dao.getById(TEST_FAN_ID);
        dao.delete(fan);

        assertNull(dao.getById(TEST_FAN_ID));
        assertTrue(dao.getByPropertyEqual("id", String.valueOf(fan.getId())).isEmpty());
    }

    /**
     * Test database all.
     */
    @Test
    void testDatabaseAll() {
        List<FanAccounts> fanList = dao.getAll();

        assertNotNull(fanList);
        assertEquals(8, fanList.size());

        FanAccounts fan = fanList.get(TEST_FAN_ID - 1);
        String fanEmail = "test@outlook.com";

        assertEquals(TEST_FAN_ID, fan.getId());
        assertEquals(fanEmail, fan.getUserEmail());
    }
}