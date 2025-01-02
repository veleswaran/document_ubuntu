// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.SQLException;
// import java.sql.Statement;
// import java.sql.ResultSet;



public class MysqlConnection {
    public static void main(String[] args) {

        UserDao user = new UserDao();
        user.listUsers();
        user.createUser("savitha", "savithamayan@gmail.com", 9847657634l, 23);
        // String url = "jdbc:mysql://localhost:3306/vel";
        // String username = "root";
        // String password = "Vels344@";
        // String query = "select * from users";

        // try {
        //     Class.forName("com.mysql.cj.jdbc.Driver");
        //     Connection connection = DriverManager.getConnection(url, username, password);
        //     // Create a statement
        //     Statement statement = connection.createStatement();

        //     // Execute the query
        //     ResultSet resultSet = statement.executeQuery(query);

        //     // Process the results
        //     while (resultSet.next()) {
        //         String name = resultSet.getString("name");
        //         String email = resultSet.getString("email");
        //         System.out.println("Employee: " + name + " " + email);
        //     }
            
        //     System.out.println("Connected to the database successfully!");
        //     resultSet.close();
        //     statement.close();
        //     connection.close();
        // } catch (SQLException e) {
        //     System.out.println("Connection failed!");
        //     e.printStackTrace();
        // } catch (ClassNotFoundException e) {
        //     System.out.println("JDBC Driver not found!");
        //     e.printStackTrace();
        // }
    }
}