package com.example.foolbar;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.app.DownloadManager;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

public class SupportChat extends AppCompatActivity {
    String clientProblemText;
    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_support_chat);
        long currentTime = Calendar.getInstance().getTimeInMillis();
        final long TIME_WINDOW = 1000 * 60 * 8; // 8 minutes
        final SharedPreferences sharedPreferences = getSharedPreferences("settings", Context.MODE_PRIVATE);
        long appfail = sharedPreferences.getLong("application_fail", 0);
        long inact_click = sharedPreferences.getLong("last_inactive_click", 0);

        final ArrayList<String> clientProblems = new ArrayList<>();
        boolean anyProblem = false;

        Log.d("chat_currenttime", String.valueOf(currentTime));
        Log.d("chat_appfail", String.valueOf(appfail));
        Log.d("chat_inactive_click", String.valueOf(inact_click));
        if (currentTime - appfail < TIME_WINDOW) {
            clientProblems.add("приложение упало");
            anyProblem = true;
        }
        if (currentTime - inact_click < TIME_WINDOW) {
            clientProblems.add("таблица умножения не работает");
            anyProblem = true;
        }

        TextView tv = findViewById(R.id.support_message_init);
        if (anyProblem) {

            clientProblemText = "Наш оператор уже знает, что у вас " + String.join(" и ", clientProblems) + ". Он уже работает над вашей проблемой";
            tv.setText(clientProblemText);
        } else {
            clientProblemText = "Расскажите о своей проблеме";
            tv.setText(clientProblemText);
        }

        RequestQueue queue = Volley.newRequestQueue(this);
        String url = "http://192.168.43.76:8080/newError";
        JSONObject jsonlog = new JSONObject();
        try {
            jsonlog.put("log", clientProblemText);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        JsonObjectRequest jsonobj = new JsonObjectRequest(Request.Method.POST, url, jsonlog, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                try {
                    Log.d("network-ans-json", response.toString(4));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("network-err", error.getMessage() == null ? error.getMessage(): "test");
            }
        });

        queue.add(jsonobj);

        Button sendButton = (Button) findViewById(R.id.send_message);
        sendButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String url = "http://192.168.43.76:8080/newError";
                EditText et = (EditText) findViewById(R.id.support_chat_textfield);
                String clientMessage = et.getText().toString();
                et.setText("");
                JSONObject jsonlog = new JSONObject();
                try {
                    jsonlog.put("log", clientMessage);
                } catch (JSONException e) {
                    Log.e("network-button", "problem with jsonlog.put");
                    e.printStackTrace();
                }
                JsonObjectRequest jsonobj = new JsonObjectRequest(Request.Method.POST, url, jsonlog, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        try {
                            Log.d("network-ans-json", response.toString(4));
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.e("network-err", error.getMessage() == null? error.getMessage(): "volley error");
                    }
                });
            }
        });

    }



}
