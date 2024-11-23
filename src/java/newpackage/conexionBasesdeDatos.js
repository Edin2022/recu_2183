import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection conectar() {
        try {
            String url = "jdbc:mysql://localhost:3306/RECUPERACION_24";
            String usuario = "root";
            String clave = "";
            return DriverManager.getConnection(url, usuario, clave);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
}


