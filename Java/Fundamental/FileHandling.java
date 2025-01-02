import java.io.*;
import java.util.*;

public class FileHandling{
    public static void main(String args[]){
        String name[]={"veles","john","raj","saran","vivek"};
        String email[]={"veles@gmail.com","john@gmail.com","raj@gmail.com","saran@gmail.com","vivek@gmail.com"};

        long phone[]={937893434l,8947593284l,88543432345l,45834783452l,48587737845l};
        byte age[]={23,54,23,21,56};

        for(int i=0;i<name.length;i++){
            writeFile("data1.txt", name[i], email[i], phone[i], age[i]);
        }

    }

    public static void writeFile(String file_path,String name,String email,long phone,byte age){
        try{
            BufferedWriter st = new BufferedWriter(new FileWriter(file_path,true));
            if(sizeof(file_path)>0){
               
                st.write("|\t"+name +"        |  "+email+"     |   "+phone+"   |    "+age+"|\n");
                st.write("---------------------------------------------------------------------\n");
            }else{
                st.write("---------------------------------------------------------------------\n");
                st.write("\tname            email          phone               age\n");
                st.write("---------------------------------------------------------------------\n");
            }
            st.close();
        }catch(IOException e){
            e.printStackTrace();
        }
       
    }

    public static void deleteFileContent(){
        try{
            List<String> exist_content= new ArrayList<>(); 
            BufferedReader fr = new BufferedReader(new FileReader("data.txt"));
            // while((line = fr.readLine())!=null){
            //     exist_content.add(line);
            // }

            // for(int i=0;i<exist_content.size();i++){
            //     if(exist_content.get(i).contains("3")){
            //         exist_content.remove(i);
            //     }else{

            //     }
            // }
            // System.out.println(exist_content);
            // fr.close();
        }catch(IOException e){
            e.printStackTrace();
        }

    }
    public static int sizeof(String file_path){
        try{
            BufferedReader fr = new BufferedReader(new FileReader(file_path));
            int i=0;
            while(fr.readLine()!=null){
                i++;
            }
            fr.close();
            return i;           
        }catch(IOException e){
            e.printStackTrace();
            return 0;
        }
    }
}
