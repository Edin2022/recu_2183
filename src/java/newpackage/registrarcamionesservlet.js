import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegistrarCamionServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String placa = request.getParameter("placa");
        String color = request.getParameter("color");
        String modelo = request.getParameter("modelo");
        String capacidad = request.getParameter("capacidad");
        String idTransporte = request.getParameter("id_transporte");

        try (Connection conn = Conexion.conectar()) {
            String sql = "INSERT INTO camion (placa, id_transporte, color_, modelo, capacidad_tonelada) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, placa);
            stmt.setString(2, idTransporte);
            stmt.setString(3, color);
            stmt.setString(4, modelo);
            stmt.setString(5, capacidad);
            stmt.executeUpdate();
            response.getWriter().println("Camión registrado con éxito.");
        } catch (Exception e) {
            e.printStackTrace();
            response.getWriter().println("Error al registrar el camión.");
        }
    }
}



