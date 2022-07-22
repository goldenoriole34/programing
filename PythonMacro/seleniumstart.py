from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
url = 'https://www.google.com'
driver.get(url)

# 검색
# driver.find_element(By.CSS_SELECTOR, '.gLFyf.gsfi').send_keys('파이썬')

# 엔터키
# driver.find_element(By.CSS_SELECTOR, '.gLFyf.gsfi').send_keys(Keys.ENTER)

# 클릭 // [1]번째 클래스
# driver.find_elements(By.CSS_SELECTOR, '.LC20lb.MBeuO.DKV0Md')[1].click()