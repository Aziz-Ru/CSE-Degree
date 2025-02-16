package javacodes;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.Socket;

public class Client {
    public static void main(String[] args) {
        String host="localhost";
        int port=3000;
        try(Socket socket=new Socket(host,port)){
            System.out.println("Connected to server on port "+port);
            BufferedReader input= new BufferedReader(new InputStreamReader(socket.getInputStream()));
            BufferedReader reader=new BufferedReader(new InputStreamReader(System.in));
            OutputStream output=socket.getOutputStream();

            String message;
            while(true){
                System.out.print("Enter a message: ");
                message=reader.readLine();
                // System.out.println("Sending message to server: "+message);
                if(message.isEmpty()){
                    break;
                }

                output.write((message+'\n').getBytes());
                // output.flush();
                String response;
                while (true){
                    response=input.readLine();
                    if(response==null){
                        break;
                    }
                    System.out.println("Server says: "+response);
                }
            }
                
        }catch(IOException e){
            e.printStackTrace();
        }
    }
}
