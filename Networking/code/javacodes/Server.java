package javacodes;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.time.LocalDate;

public class Server {

    public static void main(String[] args) {
        
        int port = 3000;
        try(ServerSocket server=new ServerSocket(port)) {
            System.out.println("Server is running on port "+port);
           while (true){
            Socket socket=server.accept();
            BufferedReader input=new BufferedReader(new InputStreamReader(socket.getInputStream()));
            String message;
            while((message=input.readLine().trim())!=null){
                System.out.println("Client says: "+message);
                if(message.isEmpty()){
                    break;
                }
                else if(message.equals("Hi")){
                    socket.getOutputStream().write("Hello\n".getBytes());
                    // socket.getOutputStream().write("End\n".getBytes());
                    socket.getOutputStream().flush();
                }
                else if(message.equals("Date")){
                    socket.getOutputStream().write((LocalDate.now().toString()+"\n").getBytes());
                    // socket.getOutputStream().write("End\n".getBytes());
                    socket.getOutputStream().flush();
                }
                else if(message.equals("Ok")){
                    for(int i=0;i<9;i++){
                       Thread.sleep(200);
                        socket.getOutputStream().write("Ok\n".getBytes());

                    }
                    // socket.getOutputStream().write("End\n".getBytes());
                    socket.getOutputStream().flush();
                }
                
                else{
                    socket.getOutputStream().write("Invalid Command\n".getBytes());
                    // socket.getOutputStream().write("End\n".getBytes());
                    socket.getOutputStream().flush();
                }
            }
            
            
           }

        } catch (Exception e) {
            
            e.printStackTrace();
        }
    }
}