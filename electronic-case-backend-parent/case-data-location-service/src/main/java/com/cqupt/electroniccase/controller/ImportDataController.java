package com.cqupt.electroniccase.controller;

import com.cqupt.electroniccase.service.ImportDataService;
import com.cqupt.electroniccase.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @auther DyingZhang
 * @Create 2022-10-12 下午 4:07
 * @Discriptioon
 */
@RestController
@RequestMapping("/electronic/case")
public class ImportDataController {

    @Autowired
    ImportDataService importDataService;

    /**
     * 以CSV格式导入数据并存入数据库中
     * @return
     */
    @PostMapping("/submit/csv")
    public R submitCSVController(MultipartFile csvData, HttpSession session) throws IOException {
        String csvPath = importDataService.submitCSVService(csvData);
        boolean isSuccessful = importDataService.parseCSVService(csvPath);
        if (isSuccessful) {
            return R.ok().message("上传成功！");
        } else {
            return R.error().message("上传失败！");
        }
    }

}
