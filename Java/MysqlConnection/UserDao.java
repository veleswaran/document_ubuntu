import java.sql.*;

public class UserDao {
    private String url = "jdbc:mysql://localhost:3306/vel";
    private String username = "root";
    private String password = "Vels344@";

    // Create User
    public void createUser(String name,String email,long phone,int age) {
        String insertQuery = "INSERT INTO users (name, email,phone,age) VALUES (?, ?, ?, ?)";
        try (Connection connection = DriverManager.getConnection(url, username, password);
             PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {

            preparedStatement.setString(1, name);
            preparedStatement.setString(2, email);
            preparedStatement.setLong(3, phone);
            preparedStatement.setInt(4, age);
            preparedStatement.executeUpdate();
            System.out.println("User created successfully!");

        } catch (SQLException e) {
            System.out.println("Error creating user: " + e.getMessage());
        }
    }

    // Read User
    public void readUser(int id) {
        String selectQuery = "SELECT * FROM users WHERE id = ?";
        try (Connection connection = DriverManager.getConnection(url, username, password);
             PreparedStatement preparedStatement = connection.prepareStatement(selectQuery)) {

            preparedStatement.setInt(1, id);
            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                // user = new User(resultSet.getInt("id"), resultSet.getString("name"), resultSet.getString("email"));
            }

        } catch (SQLException e) {
            System.out.println("Error reading user: " + e.getMessage());
        }
     
    }

    // Update User
    public void updateUser(String user) {
        String updateQuery = "UPDATE users SET name = ?, email = ? WHERE id = ?";
        try (Connection connection = DriverManager.getConnection(url, username, password);
             PreparedStatement preparedStatement = connection.prepareStatement(updateQuery)) {

            preparedStatement.setString(1, "");
            preparedStatement.setString(2, "");
            preparedStatement.setInt(3, 2);
            preparedStatement.executeUpdate();
            System.out.println("User updated successfully!");

        } catch (SQLException e) {
            System.out.println("Error updating user: " + e.getMessage());
        }
    }

    // Delete User
    public void deleteUser(int id) {
        String deleteQuery = "DELETE FROM users WHERE id = ?";
        try (Connection connection = DriverManager.getConnection(url, username, password);
             PreparedStatement preparedStatement = connection.prepareStatement(deleteQuery)) {

            preparedStatement.setInt(1, id);
            preparedStatement.executeUpdate();
            System.out.println("User deleted successfully!");

        } catch (SQLException e) {
            System.out.println("Error deleting user: " + e.getMessage());
        }
    }

    // List all Users
    public void listUsers() {
        String selectQuery = "SELECT * FROM users";
        try (Connection connection = DriverManager.getConnection(url, username, password);
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(selectQuery)) {
            while (resultSet.next()) {
               System.out.println(resultSet.getString("name"));
               System.out.println(resultSet.getString("email"));
               System.out.println(resultSet.getString("phone"));
               System.out.println(resultSet.getString("age"));
            }

        } catch (SQLException e) {
            System.out.println("Error listing users: " + e.getMessage());
        }
    }
}
