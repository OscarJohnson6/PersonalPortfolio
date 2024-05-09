package util;

import org.portfolio.utilities.PropertiesLoader;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Objects;
import java.util.Properties;


/**
 * Provides access to the database
 * Created on 8/31/16.
 *
 * @author OscarJohnson6
 * @author pwaite
 * @author Alex M - Fall 2019 - added multi-line sql capability
 */
public class Database implements PropertiesLoader {

    /**
     * Create an object of the class Database
     */
    private static final Database instance = new Database();

    /**
     * Object for logging any exception errors.
     */
    private final Logger logger = LogManager.getLogger(this.getClass());

    /**
     * Connection to a properties file
     */
    private final Properties properties;

    /**
     * Connection to an SQL Driver
     */
    private Connection connection;

    /**
     * Private constructor prevents instantiating this class anywhere else,
     * loads the properties object as well.
	 */
    private Database() {
        this.properties = loadProperties("/database.properties");
    }

    /**
     * Get the only Database object available
     *
     * @return the single database object
     */
    public static Database getInstance() {
        return instance;
    }

    /**
     * Get the database connection.
     *
     * @return the database connection
     */
    public Connection getConnection() {
        return connection;
    }

    /**
     * Attempt to connect to the database.
     */
    public void connect() {
        try {
            Class.forName(properties.getProperty("driver"));
            connection = DriverManager.getConnection(
                    properties.getProperty("url"),
                    properties.getProperty("username"),
                    properties.getProperty("password"));
        } catch (ClassNotFoundException classNotFound) {
            logger.error("No Driver Found During Connection ", classNotFound);
        } catch (SQLException sqlException) {
            logger.error("Error SQL connection, on "
                            + "connect() ", sqlException);
        }
    }

    /**
     * close and clean up the database connection
     */
    public void disconnect() {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException sqlException) {
                logger.error("Error SQL disconnecting, on disconnect() ", sqlException);
            }
        }

        connection = null;
    }

    /**
     * Run the sql.
     *
     * @param sqlFile the sql file to be read and executed line by line
     */
    public void runSQL(String sqlFile) {

        Statement stmt = null;
        ClassLoader classloader = Thread.currentThread().getContextClassLoader();
        try (BufferedReader br = new BufferedReader(new InputStreamReader(Objects.requireNonNull(classloader.getResourceAsStream(sqlFile)))))  {

            connect();
            stmt = connection.createStatement();

            StringBuilder sql = new StringBuilder();
            while (br.ready())
            {
                char inputValue = (char)br.read();

                if(inputValue == ';')
                {
                    stmt.executeUpdate(sql.toString());
                    sql = new StringBuilder();
                }
                else
                    sql.append(inputValue);
            }

        } catch (SQLException sqlException) {
            logger.error("Error SQL result reading in runSQL() ", sqlException);
        } catch (Exception exception) {
            logger.error("Error in runSQL() ", exception);
        } finally {
            disconnect();
        }

    }
}
