package com.example.foolbar;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import java.util.Calendar;
import java.util.HashMap;

public class MainActivity extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final SharedPreferences sharedPreferences = getSharedPreferences("settings", Context.MODE_PRIVATE);
        final SharedPreferences.Editor sharedEditor = sharedPreferences.edit();

        final Button mulTableButton = findViewById(R.id.mul_table_button);
        final Button failButton = findViewById(R.id.fail_button);
        final Button supportButton = findViewById(R.id.support_chat);

        mulTableButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(v.getContext(), MathActivity.class);
                startActivity(intent);
            }
        });
        failButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sharedEditor.putLong("application_fail", Calendar.getInstance().getTimeInMillis());
                sharedEditor.commit();
                android.os.Process.killProcess(android.os.Process.myPid());
            }
        });

        supportButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(v.getContext(), SupportChat.class);
                startActivity(intent);
            }
        });
    }
}
