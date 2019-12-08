package com.example.foolbar;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;

import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.text.Editable;
import android.text.TextWatcher;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import java.util.Calendar;
import java.util.Observable;

import static android.app.PendingIntent.getActivity;

public class MathActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        final SharedPreferences sharedPreferences = getSharedPreferences("settings", Context.MODE_PRIVATE);
        final SharedPreferences.Editor sharedEditor = sharedPreferences.edit();

        final MyObservableButton CheckButton = findViewById(R.id.button3);
        CheckButton.setActivated(false);

        final EditText editText = findViewById(R.id.editText);
        editText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

            }

            @Override
            public void afterTextChanged(Editable s) {
                CheckButton.setEnabled(false);
                if (!editText.getText().toString().equals(""))
                    if(Integer.parseInt(editText.getText().toString()) == 17)
                    {
//                      Button button = findViewById(R.id.button);
                        CheckButton.setEnabled(true);
                    }
            }
        });
        CheckButton.setEnabled(false);
        CheckButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
            }
        });
        CheckButton.setOnClickWhenEnabledListener(new MyObservableButton.IOnClickWhenEnabledListner() {
            @Override
            public void onClickWhenEnabled() {
                sharedEditor.putLong("last_inactive_click", Calendar.getInstance().getTimeInMillis());
                sharedEditor.commit();
            }
        });



        FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

}
