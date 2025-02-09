import java.net.ServerSocket;
import java.net.Socket;

public class TcpServer {

    public static void main(String[] args) {
        
        int port = 5000;
        try {
            ServerSocket server=new ServerSocket(port);
            System.out.println("Server is running on port "+port);
            Socket client= server.accept();
            System.out.println("Client connected "+client.getInetAddress());
            server.close();
        } catch (Exception e) {
        
            e.printStackTrace();
        }
    }
}